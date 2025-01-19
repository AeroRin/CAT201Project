/* 
package src.main.java.servlet;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/products") // URL endpoint to access this servlet
public class ProductServlet extends HttpServlet {
    private ProductDAO productDAO; // Data Access Object for products

    @Override
    public void init() throws ServletException {
        productDAO = new ProductDAO(); // Initialize the DAO
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            // Fetch all products from the database
            List<Product> products = productDAO.getAllProducts();

            // Set products as an attribute to pass to the JSP page
            request.setAttribute("products", products);

            // Forward the request to products.jsp for display
            RequestDispatcher dispatcher = request.getRequestDispatcher("products.jsp");
            dispatcher.forward(request, response);
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Unable to fetch products.");
        }
    }
}

*/
