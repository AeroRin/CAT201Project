package com.example.servlet;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.ArrayNode;

@WebServlet("/ProductCartServlet")
public class ProductCartServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private final ObjectMapper mapper = new ObjectMapper();

    private String getCartFilePath() {
        String dataPath = getServletContext().getRealPath("/WEB-INF/data");
        File dataDir = new File(dataPath);
        if (!dataDir.exists()) {
            dataDir.mkdirs();
        }
        return dataPath + File.separator + "cart.json";
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        System.out.println("=== ProductCartServlet: GET Request Received ===");
        
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        PrintWriter out = response.getWriter();

        try {
            File cartFile = new File(getCartFilePath());
            System.out.println("Cart file path: " + cartFile.getAbsolutePath());
            
            ObjectNode jsonResponse = mapper.createObjectNode();
            if (cartFile.exists()) {
                // Read existing cart
                List<Map<String, Object>> cart = mapper.readValue(cartFile, List.class);
                
                // Calculate total items and total price
                int totalItems = 0;
                double totalPrice = 0.0;
                
                for (Map<String, Object> item : cart) {
                    int quantity = ((Number) item.get("quantity")).intValue();
                    double price = ((Number) item.get("price")).doubleValue();
                    
                    totalItems += quantity;
                    totalPrice += (price * quantity);
                }

                jsonResponse.put("status", "success");
                jsonResponse.set("items", mapper.valueToTree(cart));
                jsonResponse.put("totalItems", totalItems);
                jsonResponse.put("totalPrice", totalPrice);
                
                System.out.println("Sending cart data: " + mapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonResponse));
            } else {
                jsonResponse.put("status", "success");
                jsonResponse.set("items", mapper.createArrayNode());
                jsonResponse.put("totalItems", 0);
                jsonResponse.put("totalPrice", 0.0);
                
                System.out.println("No cart found, sending empty cart");
            }
            out.print(mapper.writeValueAsString(jsonResponse));

        } catch (Exception e) {
            System.err.println("Error in ProductCartServlet (GET):");
            e.printStackTrace();
            
            ObjectNode errorResponse = mapper.createObjectNode();
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            out.print(mapper.writeValueAsString(errorResponse));
        } finally {
            out.flush();
            out.close();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        System.out.println("=== ProductCartServlet: POST Request Received ===");
        System.out.println("Content-Type: " + request.getContentType());
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");

        PrintWriter out = response.getWriter();

        try {
            // Read and log the request body
            StringBuilder jsonBody = new StringBuilder();
            try (BufferedReader reader = request.getReader()) {
                String line;
                while ((line = reader.readLine()) != null) {
                    jsonBody.append(line);
                }
            }
            System.out.println("Request Body: " + jsonBody.toString());

            // Process the request
            Map<String, Object> requestData = mapper.readValue(jsonBody.toString(), Map.class);
            
            File cartFile = new File(getCartFilePath());
            System.out.println("Cart file path: " + cartFile.getAbsolutePath());
            
            List<Map<String, Object>> cart;
            if (cartFile.exists()) {
                cart = mapper.readValue(cartFile, List.class);
            } else {
                cart = new ArrayList<>();
            }

            boolean productExists = false;
            int totalItems = 0;
            double totalPrice = 0.0;
            
            for (Map<String, Object> item : cart) {
                if (((Number) item.get("productId")).intValue() == ((Number) requestData.get("productId")).intValue()) {
                    item.put("quantity", ((Number) item.get("quantity")).intValue() + 1);
                    productExists = true;
                }
                totalItems += ((Number) item.get("quantity")).intValue();
                totalPrice += (((Number) item.get("price")).doubleValue() * ((Number) item.get("quantity")).intValue());
            }

            if (!productExists) {
                Map<String, Object> cartItem = new HashMap<>();
                cartItem.put("productId", requestData.get("productId"));
                cartItem.put("name", requestData.get("name"));
                cartItem.put("price", requestData.get("price"));
                cartItem.put("quantity", 1);
                cart.add(cartItem);
                
                totalItems += 1;
                totalPrice += ((Number) requestData.get("price")).doubleValue();
            }

            // Write updated cart
            mapper.writerWithDefaultPrettyPrinter().writeValue(cartFile, cart);
            System.out.println("Cart updated successfully");

            ObjectNode jsonResponse = mapper.createObjectNode();
            jsonResponse.put("status", "success");
            jsonResponse.put("message", "Product added to cart");
            jsonResponse.set("items", mapper.valueToTree(cart));
            jsonResponse.put("totalItems", totalItems);
            jsonResponse.put("totalPrice", totalPrice);
            
            System.out.println("Sending response: " + mapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonResponse));
            out.print(mapper.writeValueAsString(jsonResponse));

        } catch (Exception e) {
            System.err.println("Error in ProductCartServlet (POST):");
            e.printStackTrace();
            
            ObjectNode errorResponse = mapper.createObjectNode();
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            String jsonError = mapper.writeValueAsString(errorResponse);
            System.out.println("Error Response: " + jsonError);
            out.print(jsonError);
        } finally {
            out.flush();
            out.close();
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