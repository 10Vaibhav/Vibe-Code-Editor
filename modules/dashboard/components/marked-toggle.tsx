"use client"

import { Button } from "@/components/ui/button"
import { StarIcon, StarOffIcon } from "lucide-react"
import type React from "react"
import { useState, useEffect, forwardRef, useCallback } from "react"
import { toast } from "sonner"
import { toggleStarMarked } from "../actions"

interface MarkedToggleButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  markedForRevision: boolean
  id: string
}

export const MarkedToggleButton = forwardRef<HTMLButtonElement, MarkedToggleButtonProps>(
  ({ markedForRevision, id, onClick, className, children, ...props }, ref) => {
    const [isMarked, setIsMarked] = useState(markedForRevision);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsMarked(markedForRevision)
    }, [markedForRevision])

    const handleToggle = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
      // Prevent double-clicking and event propagation
      event.preventDefault();
      event.stopPropagation();
      
      if (isLoading) return; // Prevent multiple simultaneous requests

      const newMarkedState = !isMarked;
      const originalState = isMarked;
      
      // Optimistic update
      setIsMarked(newMarkedState);
      setIsLoading(true);

      // Call the original onClick if provided by the parent (DropdownMenuItem)
      onClick?.(event);

      try {
        const res = await toggleStarMarked(id, newMarkedState);
        const { success, error, isMarked: serverMarked } = res;

        if (success && !error) {
          // Confirm the server state
          setIsMarked(serverMarked!);
          if (serverMarked) {
            toast.success("Added to Favorites successfully");
          } else {
            toast.success("Removed from Favorites successfully");
          }
        } else {
          // Revert on error
          setIsMarked(originalState);
          toast.error(error || "Failed to update favorite status");
        }
      } catch (error) {
        console.error("Failed to toggle mark for revision:", error);
        setIsMarked(originalState); // Revert state if the update fails
        toast.error("Failed to update favorite status");
      } finally {
        setIsLoading(false);
      }
    }, [id, isMarked, isLoading, onClick]);

    return (
      <Button
        ref={ref}
        variant="ghost"
        className={`flex items-center justify-start w-full px-2 py-1.5 text-sm rounded-md cursor-pointer ${isLoading ? 'opacity-50' : ''} ${className}`}
        onClick={handleToggle}
        disabled={isLoading}
        {...props}
      >
        {isMarked ? (
          <StarIcon size={16} className="text-red-500 mr-2" />
        ) : (
          <StarOffIcon size={16} className="text-gray-500 mr-2" />
        )}
        {children || (isMarked ? "Remove Favorite" : "Add to Favorite")}
      </Button>
    )
  },
)

MarkedToggleButton.displayName = "MarkedToggleButton"
