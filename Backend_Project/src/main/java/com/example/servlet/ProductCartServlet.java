package com.example.servlet;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/ProductCartServlet")
public class ProductCartServlet extends HttpServlet {
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
            // Get cart file path
            String realPath = getServletContext().getRealPath("/data/cart.json");
            File cartFile = new File(realPath);
            System.out.println("Reading cart from: " + cartFile.getAbsolutePath());

            // Check if cart file exists
            if (!cartFile.exists()) {
                System.out.println("Cart file does not exist. Creating empty cart.");
                JSONObject jsonResponse = new JSONObject()
                    .put("status", "success")
                    .put("items", new JSONArray())
                    .put("totalItems", 0)
                    .put("subtotal", 0.0)
                    .put("totalPrice", 0.0);
                out.print(jsonResponse.toString());
                return;
            }

            // Read cart data
            String cartContent = new String(java.nio.file.Files.readAllBytes(cartFile.toPath()));
            JSONArray cart = new JSONArray(cartContent.isEmpty() ? "[]" : cartContent);
            System.out.println("Cart content: " + cart.toString(2));

            // Calculate totals
            int totalItems = 0;
            double totalPrice = 0.0;
            for (int i = 0; i < cart.length(); i++) {
                JSONObject item = cart.getJSONObject(i);
                totalItems += item.getInt("quantity");
       
                totalPrice += (item.getDouble("price") * item.getInt("quantity"));
            }

            // Send response
            JSONObject jsonResponse = new JSONObject()
                .put("status", "success")
                .put("items", cart)
                .put("totalItems", totalItems)
                .put("totalPrice", totalPrice);

            System.out.println("Sending response: " + jsonResponse.toString(2));
            out.print(jsonResponse.toString());

        } catch (Exception e) {
            System.err.println("Error in ProductCartServlet (GET):");
            e.printStackTrace();
            
            JSONObject errorResponse = new JSONObject()
                .put("status", "error")
                .put("message", "Error fetching cart: " + e.getMessage());
            out.print(errorResponse.toString());
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
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
            System.out.println("Request Body: " + requestBody.toString());

            // Parse the request data
            JSONObject requestData = new JSONObject(requestBody.toString());
            
            // Get cart file
            String realPath = getServletContext().getRealPath("/data/cart.json");
            File cartFile = new File(realPath);
            System.out.println("Cart file path: " + cartFile.getAbsolutePath());
            
            // Create parent directories if they don't exist
            cartFile.getParentFile().mkdirs();
            
            // Read or create cart
            JSONArray cart;
            if (cartFile.exists()) {
                String cartContent = new String(java.nio.file.Files.readAllBytes(cartFile.toPath()));
                cart = new JSONArray(cartContent.isEmpty() ? "[]" : cartContent);
            } else {
                cart = new JSONArray();
            }

            // Check if product already exists
            boolean productExists = false;
            int totalItems = 0;
            double totalPrice = 0.0;
            
            for (int i = 0; i < cart.length(); i++) {
                JSONObject item = cart.getJSONObject(i);
                if (item.getInt("productId") == requestData.getInt("productId")) {
                    item.put("quantity", item.getInt("quantity") + 1);
                    productExists = true;
                }
                totalItems += item.getInt("quantity");
                totalPrice += (item.getDouble("price") * item.getInt("quantity"));
            }

            // Add new item if not exists
            if (!productExists) {
                JSONObject cartItem = new JSONObject();
                cartItem.put("productId", requestData.getInt("productId"));
                cartItem.put("name", requestData.getString("name"));
                cartItem.put("price", requestData.getDouble("price"));
                cartItem.put("image", requestData.getString("image"));
                cartItem.put("quantity", 1);
                cart.put(cartItem);
                
                totalItems += 1;
                totalPrice += requestData.getDouble("price");
            }

            // Write updated cart
            try (FileWriter fw = new FileWriter(cartFile)) {
                fw.write(cart.toString(2));
                System.out.println("Cart updated successfully");
            }

            // Send response
            JSONObject jsonResponse = new JSONObject()
                .put("status", "success")
                .put("message", "Product added to cart")
                .put("items", cart)
                .put("totalItems", totalItems)
                .put("totalPrice", totalPrice);
            
            System.out.println("Sending response: " + jsonResponse.toString(2));
            out.print(jsonResponse.toString());

        } catch (Exception e) {
            System.err.println("Error in ProductCartServlet (POST):");
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
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setStatus(HttpServletResponse.SC_OK);
    }
}