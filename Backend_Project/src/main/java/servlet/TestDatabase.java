package servlet;
public class TestDatabase {
    public static void main(String[] args) {
        // Create an instance of ProductDAO to interact with the database
        ProductDAO productDAO = new ProductDAO();
        
        // Call the method to add a product to the database
        productDAO.addProduct("Coffee Beans", "Premium quality coffee beans.", 25.99);
        
        // Print a message indicating the product has been added
        System.out.println("Product added to database.");
    }
}
