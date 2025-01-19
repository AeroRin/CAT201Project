package com.example.servlet;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/ForgotPasswordServlet")
public class ForgotPasswordServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();

        try {
            System.out.println("Starting password reset process...");

            // Read request body
            StringBuilder requestBody = new StringBuilder();
            try (BufferedReader reader = request.getReader()) {
                String line;
                while ((line = reader.readLine()) != null) {
                    requestBody.append(line);
                }
            }
            System.out.println("Request body: " + requestBody.toString());

            // Parse JSON request
            JSONObject jsonRequest = new JSONObject(requestBody.toString());
            String email = jsonRequest.getString("email");
            String newPassword = jsonRequest.getString("newPassword");
            System.out.println("Email: " + email);
            System.out.println("Password length: " + newPassword.length());

            // Validate input
            if (!isValidEmail(email) || !isValidPassword(newPassword)) {
                String errorMsg = "{\"status\":\"error\",\"message\":\"Invalid email or password format.\"}";
                System.out.println("Validation error: " + errorMsg);
                out.print(errorMsg);
                return;
            }

            // Get the path to login.json
            String realPath = getServletContext().getRealPath("/data/login.json");
            System.out.println("File path: " + realPath);
            File file = new File(realPath);
            
            // Check if file exists
            System.out.println("File exists: " + file.exists());
            System.out.println("File can read: " + file.canRead());
            System.out.println("File can write: " + file.canWrite());

            // Create directories if they don't exist
            if (!file.getParentFile().exists()) {
                boolean created = file.getParentFile().mkdirs();
                System.out.println("Created directories: " + created);
            }

            // Read existing users or create new array
            JSONArray users;
            if (file.exists()) {
                String content = new String(java.nio.file.Files.readAllBytes(file.toPath()));
                System.out.println("File content: " + content);
                users = new JSONArray(content.isEmpty() ? "[]" : content);
                System.out.println("Users array size: " + users.length());
            } else {
                System.out.println("File does not exist");
                out.print("{\"status\":\"error\",\"message\":\"Email not found.\"}");
                return;
            }

            // Find and update user password
            boolean userFound = false;
            for (int i = 0; i < users.length(); i++) {
                JSONObject user = users.getJSONObject(i);
                if (user.getString("email").equals(email)) {
                    user.put("password", newPassword);
                    userFound = true;
                    System.out.println("User found and password updated");
                    break;
                }
            }

            if (!userFound) {
                System.out.println("User not found for email: " + email);
                out.print("{\"status\":\"error\",\"message\":\"Email not found.\"}");
                return;
            }

            // Write updated users back to file
            try (FileWriter writer = new FileWriter(file)) {
                String updatedContent = users.toString(2);
                writer.write(updatedContent);
                System.out.println("Updated content written to file: " + updatedContent);
            }

            // Send success response
            String successMsg = "{\"status\":\"success\",\"message\":\"Password updated successfully.\"}";
            System.out.println("Success response: " + successMsg);
            out.print(successMsg);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error occurred: " + e.getMessage());
            System.out.println("Error stack trace:");
            e.printStackTrace(new PrintWriter(System.out));
            out.print("{\"status\":\"error\",\"message\":\"An error occurred: " + e.getMessage() + "\"}");
        }
    }

    private boolean isValidEmail(String email) {
        boolean isValid = email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
        System.out.println("Email validation for " + email + ": " + isValid);
        return isValid;
    }

    private boolean isValidPassword(String password) {
        boolean isValid = password != null && password.length() >= 6;
        System.out.println("Password validation: " + isValid + " (length: " + (password != null ? password.length() : "null") + ")");
        return isValid;
    }

    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setStatus(HttpServletResponse.SC_OK);
    }
}