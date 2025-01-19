package com.example.servlet;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.FileReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        
        try {
            // Read the request body
            StringBuilder requestBody = new StringBuilder();
            try (BufferedReader reader = request.getReader()) {
                String line;
                while ((line = reader.readLine()) != null) {
                    requestBody.append(line);
                }
            }

            // Extract email and password
            String body = requestBody.toString();
            String email = body.split("\"email\":\"")[1].split("\"")[0].trim();
            String password = body.split("\"password\":\"")[1].split("\"")[0].trim();

            System.out.println("Extracted email: " + email);
            System.out.println("Extracted password: " + password);

            // Read the login.json file using relative path
            String realPath = request.getServletContext().getRealPath("/data/login.json");
            File usersFile = new File(realPath);
            if (!usersFile.exists()) {
                throw new FileNotFoundException("login.json not found at: " + realPath);
            }
            
            System.out.println("Real Path: " + realPath);


            // Read the file content
            StringBuilder jsonContent = new StringBuilder();
            try (BufferedReader br = new BufferedReader(new FileReader(usersFile))) {
                String line;
                while ((line = br.readLine()) != null) {
                    jsonContent.append(line);
                }
            }

            String fileContent = jsonContent.toString();
            System.out.println("File content: " + fileContent);

            // Simplified verification logic
            boolean userExists = false;
            
            // Remove all whitespace for comparison
            String normalizedContent = fileContent.replaceAll("\\s+", "");
            String searchEmail = "\"email\":\"" + email + "\"";
            String searchPassword = "\"password\":\"" + password + "\"";
            
            System.out.println("Normalized content: " + normalizedContent);
            System.out.println("Searching for email: " + searchEmail);
            System.out.println("Searching for password: " + searchPassword);

            // Check if both email and password exist in the same user object
            if (normalizedContent.contains(searchEmail) && normalizedContent.contains(searchPassword)) {
                int emailIndex = normalizedContent.indexOf(searchEmail);
                int passwordIndex = normalizedContent.indexOf(searchPassword);
                
                // Make sure they're in the same user object (within reasonable character distance)
                if (Math.abs(emailIndex - passwordIndex) < 100) {
                    userExists = true;
                    System.out.println("Match found for user!");
                }
            }

            // Prepare response
            if (userExists) {
                out.print("{\"status\":\"success\",\"message\":\"Login successful\"}");
            } else {
                out.print("{\"status\":\"error\",\"message\":\"Invalid email or password\"}");
            }

        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"status\":\"error\",\"message\":\"An error occurred: " + e.getMessage() + "\"}");
        } finally {
            out.flush();
            out.close();
        }
    }

    // Helper method to validate email format
    private boolean isValidEmail(String email) {
        if (email == null || email.isEmpty()) {
            return false;
        }
        // Basic email validation
        String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
        return email.matches(emailRegex);
    }

    // Helper method to validate password
    private boolean isValidPassword(String password) {
        if (password == null || password.isEmpty()) {
            return false;
        }
        // Basic password validation (minimum 6 characters)
        return password.length() >= 6;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        try {
            // Use relative path here as well
            String realPath = request.getServletContext().getRealPath("/data/login.json");
            File usersFile = new File(realPath);
            if (!usersFile.exists()) {
                throw new FileNotFoundException("login.json not found at: " + realPath);
            }

            // Read the file content directly
            StringBuilder jsonContent = new StringBuilder();
            try (BufferedReader br = new BufferedReader(new FileReader(usersFile))) {
                String line;
                while ((line = br.readLine()) != null) {
                    jsonContent.append(line);
                }
            }

            // Create a simple JSON response wrapping the content
            String jsonResponse = "{\"status\":\"success\",\"users\":" + jsonContent.toString() + "}";
            
            out.print(jsonResponse);
            
        } catch (Exception e) {
            e.printStackTrace();
            String errorResponse = "{\"status\":\"error\",\"message\":\"Failed to retrieve users: " + e.getMessage() + "\"}";
            out.print(errorResponse);
        } finally {
            out.flush();
            out.close();
        }
    }
}