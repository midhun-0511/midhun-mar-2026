// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Upload Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the file upload demo page
        // Using a sample file upload page for testing
        await page.goto('https://the-internet.herokuapp.com/upload');
    });

    test('Upload single file', async ({ page }) => {
        // Locate the file input element
        const fileInput = page.locator('input[type="file"]');

        // Create a test file path (you can use any file from your project)
        const testFilePath = path.join(__dirname, '../screenshots/visible.png');

        // Set the file path to the input
        await fileInput.setInputFiles(testFilePath);

        // Click the upload button
        await page.click('input[value="Upload"]');

        // Verify the file was uploaded successfully
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
        await expect(page.locator('text=visible.png')).toBeVisible();
    });

    test('Upload and verify file name', async ({ page }) => {
        const fileInput = page.locator('input[type="file"]');
        const testFilePath = path.join(__dirname, '../screenshots/visible.png');

        // Upload the file
        await fileInput.setInputFiles(testFilePath);

        // Click upload button
        await page.click('input[value="Upload"]');

        // Verify file name appears in the result
        const fileNameElement = page.locator('text=visible.png');
        await expect(fileNameElement).toBeVisible();
    });

    test('Upload multiple files', async ({ page }) => {
        const fileInput = page.locator('input[type="file"]');

        // Create an array of file paths to upload
        const files = [
            path.join(__dirname, '../screenshots/visible.png'),
            // Add more files as needed
        ];

        // Set multiple files
        await fileInput.setInputFiles(files);

        // Verify files are selected
        await expect(fileInput).toHaveCount(1);

        // Click upload
        await page.click('input[value="Upload"]');

        // Verify upload message
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
    });

    test('Verify file upload field exists', async ({ page }) => {
        // Check if file input element is present on the page
        const fileInput = page.locator('input[type="file"]');
        await expect(fileInput).toBeVisible();
    });

    test('File upload with drag and drop', async ({ page }) => {
        // Create a test file
        const testFilePath = path.join(__dirname, '../screenshots/visible.png');

        // Get the file input element
        const fileInput = page.locator('input[type="file"]');

        // Drag and drop the file to the input
        await fileInput.setInputFiles(testFilePath);

        // Verify selection
        const inputElement = fileInput.first();
        await expect(inputElement).toBeTruthy();

        // Upload
        await page.click('input[value="Upload"]');

        // Verify success
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
    });
});
