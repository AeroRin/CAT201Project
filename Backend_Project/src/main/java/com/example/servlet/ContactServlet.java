package com.example.servlet;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/ContactServlet")
public class ContactServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();
        
        try {
            // Get contact file path
            String realPath = getServletContext().getRealPath("/data/contact.json");
            File contactFile = new File(realPath);
            
            // Check if contact file exists
            if (!contactFile.exists()) {
                JSONObject emptyResponse = new JSONObject()
                    .put("contacts", new JSONArray())
                    .put("metadata", new JSONObject()
                        .put("lastUpdated", "")
                        .put("totalContacts", 0));
                out.print(emptyResponse.toString(4));
                return;
            }

            // Read and return the contacts
            String content = new String(java.nio.file.Files.readAllBytes(contactFile.toPath()));
            out.print(content);

        } catch (Exception e) {
            e.printStackTrace();
            JSONObject errorResponse = new JSONObject()
                .put("status", "error")
                .put("message", e.getMessage());
            out.print(errorResponse.toString());
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        PrintWriter out = response.getWriter();

        try {
            // Read request body
            StringBuilder requestBody = new StringBuilder();
            try (BufferedReader reader = request.getReader()) {
                String line;
                while ((line = reader.readLine()) != null) {
                    requestBody.append(line);
                }
            }

            JSONObject requestData = new JSONObject(requestBody.toString());
            
            if ("addContact".equals(requestData.getString("action"))) {
                // Get contact file path
                String realPath = getServletContext().getRealPath("/data/contact.json");
                File contactFile = new File(realPath);
                contactFile.getParentFile().mkdirs();

                // Read existing contacts or create new structure
                JSONObject contactData;
                if (contactFile.exists()) {
                    String content = new String(java.nio.file.Files.readAllBytes(contactFile.toPath()));
                    contactData = new JSONObject(content.isEmpty() ? "{\"contacts\":[], \"metadata\":{}}" : content);
                } else {
                    contactData = new JSONObject();
                    contactData.put("contacts", new JSONArray());
                    contactData.put("metadata", new JSONObject());
                }

                JSONArray contacts = contactData.getJSONArray("contacts");
                JSONObject metadata = contactData.getJSONObject("metadata");

                // Create new contact object
                JSONObject contact = new JSONObject();
                contact.put("id", contacts.length() + 1);
                contact.put("name", requestData.getString("name"));
                contact.put("email", requestData.getString("email"));
                contact.put("phone", requestData.getString("phone"));
                contact.put("message", requestData.getString("message"));
                contact.put("timestamp", new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
                    .format(new java.util.Date()));

                // Add to contacts array
                contacts.put(contact);

                // Update metadata
                metadata.put("lastUpdated", new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
                    .format(new java.util.Date()));
                metadata.put("totalContacts", contacts.length());

                // Write updated contacts to file
                try (FileWriter fw = new FileWriter(contactFile)) {
                    fw.write(contactData.toString(4));
                }

                // Send success response
                JSONObject jsonResponse = new JSONObject()
                    .put("status", "success")
                    .put("message", "Contact message saved successfully");
                out.print(jsonResponse.toString());
            }

        } catch (Exception e) {
            e.printStackTrace();
            JSONObject errorResponse = new JSONObject()
                .put("status", "error")
                .put("message", e.getMessage());
            out.print(errorResponse.toString());
        }
    }

    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
