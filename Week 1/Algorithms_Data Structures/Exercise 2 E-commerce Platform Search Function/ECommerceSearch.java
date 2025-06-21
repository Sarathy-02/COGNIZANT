import java.util.Arrays;
import java.util.Comparator;

public class ECommerceSearch {

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName != null && product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0;
        int right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            String midName = products[mid].productName;
            if (midName == null) {
                left = mid + 1;
                continue;
            }
            int cmp = midName.compareToIgnoreCase(targetName);
            if (cmp == 0) {
                return products[mid];
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shirt", "Clothing"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "Shoes", "Footwear"),
            new Product(105, "Keyboard", "Accessories")
        };

        String searchName1 = "Mobile";
        String searchName2 = "Tablet";

        System.out.println("Products:");
        for (Product p : products) {
            System.out.println(p);
        }

        System.out.println("\nLinear Search:");
        Product result1 = linearSearch(products, searchName1);
        System.out.println("Search for \"" + searchName1 + "\": " + (result1 != null ? result1 : "Not found"));

        Product result2 = linearSearch(products, searchName2);
        System.out.println("Search for \"" + searchName2 + "\": " + (result2 != null ? result2 : "Not found"));

        Arrays.sort(products, Comparator.comparing(
            p -> p.productName == null ? "" : p.productName.toLowerCase()
        ));

        System.out.println("\nSorted Products for Binary Search:");
        for (Product p : products) {
            System.out.println(p);
        }

        System.out.println("\nBinary Search:");
        Product result3 = binarySearch(products, searchName1);
        System.out.println("Search for \"" + searchName1 + "\": " + (result3 != null ? result3 : "Not found"));

        Product result4 = binarySearch(products, searchName2);
        System.out.println("Search for \"" + searchName2 + "\": " + (result4 != null ? result4 : "Not found"));
    }
}

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}
