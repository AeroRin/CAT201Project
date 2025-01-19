package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

@WebServlet("/api/data") // Map this servlet to /api/data
public class DataServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Allow CORS
        response.setHeader("Access-Control-Allow-Origin", "*"); // Allows any origin
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Specifies allowed methods
        response.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Specifies allowed headers
        
        // Set the response type to JSON
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // Example JSON data
        String jsonData = "{ \"message\": \"Hello from Java Servlet!\", \"status\": \"success\" }";

        // Send the JSON response
        PrintWriter out = response.getWriter();
        out.print(jsonData);
        out.flush();
    }
}
