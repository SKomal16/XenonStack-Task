import java.sql.*;

public class ContactFormHandler {
    private Connection conn;
    
    public ContactFormHandler() {
        // Initialize database connection
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "root";
        String password = "password";
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url, user, password);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public void addContact(String name, String email, String phone, String message) {
        // Insert the form data into the database
        try {
            PreparedStatement stmt = conn.prepareStatement("INSERT INTO contact (name, email, phone, message) 
VALUES (?, ?, ?, ?)");
            stmt.setString(1, name);
            stmt.setString(2, email);
            stmt.setString(3, phone);
            stmt.setString(4, message);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public void close() {
        // Close the database connection
        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

