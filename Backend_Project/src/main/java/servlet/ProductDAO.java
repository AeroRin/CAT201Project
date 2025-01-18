package servlet;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ProductDAO {
    // Method to add a product to the database
    public void addProduct(String name, String description, double price) {
        // Establish a connection to the database
        Connection connection = DatabaseConnector.connect();
        
        if (connection != null) {
            // SQL query to insert a new product
            String query = "INSERT INTO products (name, description, price) VALUES (?, ?, ?)";

            try (PreparedStatement stmt = connection.prepareStatement(query)) {
                // Set the parameters for the query
                stmt.setString(1, name);        // Set the 'name' field
                stmt.setString(2, description); // Set the 'description' field
                stmt.setDouble(3, price);       // Set the 'price' field

                // Execute the update to insert data into the table
                stmt.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();  // Handle SQL errors (e.g., connection issues)
            } finally {
                try {
                    // Close the connection to release resources
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();  // Handle errors during closing the connection
                }
            }
        }
    }
}

