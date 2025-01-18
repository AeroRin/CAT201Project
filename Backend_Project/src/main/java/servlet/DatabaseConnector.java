package servlet;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnector {
    // Database URL, username, and password
    private static final String URL = "jdbc:mysql://localhost:3306/ecommerce";
    private static final String USER = "root";  // MySQL username
    private static final String PASSWORD = "123456";  // MySQL password

    // Method to establish a connection
    public static Connection connect() {
        try {
            // Load MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish and return the connection
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}

