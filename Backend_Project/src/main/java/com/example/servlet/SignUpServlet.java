package com.example.servlet;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/SignupServlet")
public class SignupServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST");
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

            // Extract user details
            String body = requestBody.toString();
            String name = body.split("\"name\":\"")[1].split("\"")[0].trim();
            String email = body.split("\"email\":\"")[1].split("\"")[0].trim();
            String password = body.split("\"password\":\"")[1].split("\"")[0].trim();

            System.out.println("Signup attempt - Name: " + name + ", Email: " + email);

            // Validate input
            if (!isValidEmail(email)) {
                out.print("{\"status\":\"error\",\"message\":\"Please enter a valid email address.\"}");
                return;
            }

            if (!isValidPassword(password)) {
                out.print("{\"status\":\"error\",\"message\":\"Password must be at least 6 characters long.\"}");
                return;
            }

            // Read existing users
            String realPath = "C:\\Users\\Bryant Tan\\CAT201_Project - Copy\\Backend_Project\\src\\main\\webapp\\data\\login.json";
            File usersFile = new File(realPath);
            
            // Create file if it doesn't exist
            if (!usersFile.exists()) {
                try (PrintWriter writer = new PrintWriter(usersFile)) {
                    writer.print("[]");
                }
            }

            // Read existing content
            StringBuilder jsonContent = new StringBuilder();
            try (BufferedReader br = new BufferedReader(new FileReader(usersFile))) {
                String line;
                while ((line = br.readLine()) != null) {
                    jsonContent.append(line);
                }
            }

            // Check if email already exists
            String fileContent = jsonContent.toString();
            if (fileContent.contains("\"email\":\"" + email + "\"")) {
                out.print("{\"status\":\"error\",\"message\":\"Email already registered.\"}");
                return;
            }

            // Add new user
            String newUser = String.format(
                "{\"name\":\"%s\",\"email\":\"%s\",\"password\":\"%s\"}", 
                name, email, password
            );

            // Update JSON file
            String updatedContent;
            if (fileContent.trim().equals("[]")) {
                updatedContent = "[" + newUser + "]";
            } else {
                updatedContent = fileContent.substring(0, fileContent.length() - 1) 
                                + "," + newUser + "]";
            }

            // Write back to file
            try (PrintWriter fileWriter = new PrintWriter(usersFile)) {
                fileWriter.print(updatedContent);
            }

            // Send success response
            out.print("{\"status\":\"success\",\"message\":\"Registration successful! Please login.\"}");

        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"status\":\"error\",\"message\":\"An error occurred: " + e.getMessage() + "\"}");
        } finally {
            out.flush();
            out.close();
        }
    }

    private boolean isValidEmail(String email) {
        if (email == null || email.isEmpty()) {
            return false;
        }
        String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
        return email.matches(emailRegex);
    }

    private boolean isValidPassword(String password) {
        return password != null && password.length() >= 6;
    }
}