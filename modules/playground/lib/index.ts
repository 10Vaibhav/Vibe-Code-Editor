import { TemplateFile, TemplateFolder } from "./path-to-json";

/**
 * Locate a file within a TemplateFolder tree and return its path.
 *
 * @param file - The target TemplateFile to locate; matching is performed by `filename` and `fileExtension`.
 * @param folder - The TemplateFolder to search within.
 * @param pathSoFar - Accumulated folder names representing the traversal path (used for recursion).
 * @returns The slash-joined path to the file (without a leading slash) if found, `null` otherwise.
 */
export function findFilePath(
    file: TemplateFile,
    folder: TemplateFolder,
    pathSoFar: string[] = []
): string | null {
    for (const item of folder.items) {
        if ("folderName" in item) {
            const res = findFilePath(file, item, [...pathSoFar, item.folderName]);
            if (res) return res;
        } else {
            if (
                item.filename === file.filename &&
                item.fileExtension === file.fileExtension
            ) {
                return [
                    ...pathSoFar,
                    item.filename + (item.fileExtension ? "." + item.fileExtension : ""),
                ].join("/");
            }
        }
    }
    return null;
}

/**
 * Generates a unique file ID based on file location in folder structure
 * @param file The template file
 * @param rootFolder The root template folder containing all files
 * @returns A unique file identifier including full path
 */
export const generateFileId = (file: TemplateFile, rootFolder: TemplateFolder): string => {
    // Find the file's path in the folder structure
    const path = findFilePath(file, rootFolder)?.replace(/^\/+/, '') || '';

    // Handle empty/undefined file extension
    const extension = file.fileExtension?.trim();
    const extensionSuffix = extension ? `.${extension}` : '';

    // Combine path and filename
    return path
        ? `${path}/${file.filename}${extensionSuffix}`
        : `${file.filename}${extensionSuffix}`;
}
