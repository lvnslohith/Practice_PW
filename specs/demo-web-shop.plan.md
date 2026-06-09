# Demo Web Shop Test Plan

## Application Overview

The Demo Web Shop is a feature-rich e-commerce application built with nopCommerce. It provides users with the ability to browse products across multiple categories (Books, Computers, Electronics, Apparel & Shoes, Digital Downloads, Jewelry, and Gift Cards), register and authenticate, manage their shopping cart, add items to wishlists, search for products, and complete purchases. The application includes user account management, product reviews, newsletter subscription, and comparison features.

## Test Scenarios

### 1. User Registration and Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Register new user with valid information

**File:** `tests/user-management/register-valid.spec.ts`

**Steps:**
  1. Navigate to the registration page at https://demowebshop.tricentis.com/register
    - expect: The registration page loads successfully
    - expect: The page displays 'Register' as the heading
    - expect: All required form fields are visible: Gender, First name, Last name, Email, Password, Confirm password
  2. Select 'Male' gender option
    - expect: The Male radio button is selected
  3. Enter 'John' in the First name field
    - expect: The text 'John' is entered in the First name field
  4. Enter 'Doe' in the Last name field
    - expect: The text 'Doe' is entered in the Last name field
  5. Enter 'john.doe.test@example.com' in the Email field
    - expect: The email address is entered in the Email field
  6. Enter 'TestPassword123!' in the Password field
    - expect: The password is entered (displayed as dots for security)
  7. Enter 'TestPassword123!' in the Confirm password field
    - expect: The confirm password is entered (displayed as dots for security)
  8. Click the 'Register' button
    - expect: The registration is processed
    - expect: The user is redirected to a success page or the homepage
    - expect: A confirmation message is displayed indicating successful registration

#### 1.2. Register with mismatched passwords

**File:** `tests/user-management/register-mismatched-passwords.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/register
    - expect: The registration page loads successfully
  2. Select 'Female' gender
    - expect: The Female radio button is selected
  3. Enter 'Jane' in the First name field
    - expect: The first name is entered
  4. Enter 'Smith' in the Last name field
    - expect: The last name is entered
  5. Enter 'jane.smith@example.com' in the Email field
    - expect: The email is entered
  6. Enter 'Password123!' in the Password field
    - expect: The password is entered
  7. Enter 'DifferentPassword456!' in the Confirm password field
    - expect: The mismatched password is entered
  8. Click the 'Register' button
    - expect: An error message is displayed indicating passwords do not match
    - expect: The user remains on the registration page
    - expect: The form data is retained for correction

#### 1.3. Register with missing required fields

**File:** `tests/user-management/register-missing-fields.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/register
    - expect: The registration page loads
  2. Leave all fields empty and click the 'Register' button
    - expect: Validation errors are displayed for required fields
    - expect: The user is not registered
    - expect: The user remains on the registration page

#### 1.4. Register with invalid email format

**File:** `tests/user-management/register-invalid-email.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/register
    - expect: The registration page loads
  2. Complete all fields with valid data except enter 'invalid-email' (without @) in the Email field
    - expect: The invalid email is entered
  3. Click the 'Register' button
    - expect: An error message is displayed indicating the email format is invalid
    - expect: Registration is not completed
    - expect: The user remains on the registration page

#### 1.5. Login with valid credentials

**File:** `tests/user-management/login-valid.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/login
    - expect: The login page loads successfully
    - expect: Login form with Email and Password fields is visible
    - expect: A 'Log in' button is present
  2. Enter a previously registered email address in the Email field
    - expect: The email is entered in the Email field
  3. Enter the correct password in the Password field
    - expect: The password is entered (displayed as dots)
  4. Click the 'Log in' button
    - expect: The login is successful
    - expect: The user is redirected to the homepage or dashboard
    - expect: The user's account information is displayed in the header
    - expect: The 'Log in' link is replaced with user account options

#### 1.6. Login with invalid email format

**File:** `tests/user-management/login-invalid-email.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/login
    - expect: The login page loads
  2. Enter 'invalid-email' in the Email field
    - expect: The invalid email is entered
  3. Enter any password in the Password field
    - expect: The password is entered
  4. Click the 'Log in' button
    - expect: An error message is displayed
    - expect: The user is not logged in
    - expect: The user remains on the login page

#### 1.7. Login with incorrect password

**File:** `tests/user-management/login-incorrect-password.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/login
    - expect: The login page loads
  2. Enter a valid registered email in the Email field
    - expect: The email is entered
  3. Enter an incorrect password in the Password field
    - expect: The incorrect password is entered
  4. Click the 'Log in' button
    - expect: An error message is displayed indicating login failed
    - expect: The user is not logged in
    - expect: The user remains on the login page

### 2. Product Browsing and Searching

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse products in Books category

**File:** `tests/product-browsing/browse-books.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/books
    - expect: The Books category page loads successfully
    - expect: The page title shows 'Demo Web Shop. Books'
    - expect: A list of book products is displayed
    - expect: Each product shows: image, title, price, and 'Add to cart' button
  2. Verify that multiple books are displayed on the page
    - expect: At least 3-5 different books are visible
  3. Scroll down to see if there are more products or pagination controls
    - expect: Additional products are displayed
    - expect: Pagination controls are present if there are multiple pages

#### 2.2. Browse products in Computers category

**File:** `tests/product-browsing/browse-computers.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/computers
    - expect: The Computers category page loads
    - expect: Computer products are displayed with images, titles, and prices
  2. Verify that products include both desktops and laptops
    - expect: A variety of computer products are shown

#### 2.3. Browse all product categories

**File:** `tests/product-browsing/browse-all-categories.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: Category links are visible in the main navigation: Books, Computers, Electronics, Apparel & Shoes, Digital downloads, Jewelry, Gift Cards
  2. Click on each category and verify that products are displayed
    - expect: Each category page loads successfully
    - expect: Products specific to each category are displayed
    - expect: Page titles reflect the selected category

#### 2.4. Search for products using search functionality

**File:** `tests/product-browsing/search-products.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: A search box is visible in the header with placeholder 'Search store'
  2. Click on the search box and type 'laptop'
    - expect: The search box is focused and 'laptop' is entered
  3. Click the 'Search' button or press Enter
    - expect: Search is executed
    - expect: Search results page is displayed
    - expect: Products matching 'laptop' are shown
    - expect: Results include relevant items

#### 2.5. Search with no results

**File:** `tests/product-browsing/search-no-results.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
  2. Use the search box to search for 'xyzabc123notexisting'
    - expect: The search term is entered
  3. Click the 'Search' button
    - expect: Search results page is displayed
    - expect: A message indicating 'No products found' or similar is shown
    - expect: The page handles the no-results state gracefully

#### 2.6. Search with empty search term

**File:** `tests/product-browsing/search-empty.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
  2. Click on the search box without entering any text
    - expect: The search box is focused
  3. Click the 'Search' button
    - expect: Either all products are shown or an error message is displayed
    - expect: The application handles empty search gracefully

### 3. Product Details and Reviews

**Seed:** `tests/seed.spec.ts`

#### 3.1. View product details page

**File:** `tests/product-details/view-product-details.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/25-virtual-gift-card
    - expect: The product details page loads
    - expect: Product name '$25 Virtual Gift Card' is displayed as heading
    - expect: Product image is shown
    - expect: Product price is displayed
    - expect: Product description is visible
  2. Verify all product information elements are present
    - expect: Price is shown (e.g., $25.00)
    - expect: Quantity selector with default value of 1 is visible
    - expect: 'Add to cart' button is present
    - expect: 'Add to wishlist' button is present
    - expect: 'Email a friend' button is present
    - expect: 'Add to compare list' button is present
  3. Check for product-specific fields
    - expect: For gift cards: Recipient's Name, Recipient's Email, Your Name, Your Email, and Message fields are visible

#### 3.2. View product reviews

**File:** `tests/product-details/view-product-reviews.spec.ts`

**Steps:**
  1. Navigate to a product page with reviews, e.g., https://demowebshop.tricentis.com/25-virtual-gift-card
    - expect: The product page loads
    - expect: A review count link is displayed (e.g., '825 review(s)')
  2. Click on the reviews link
    - expect: The reviews section or page loads
    - expect: Individual reviews are displayed with ratings and comments
    - expect: Review information includes reviewer details if available

#### 3.3. Add product review

**File:** `tests/product-details/add-product-review.spec.ts`

**Steps:**
  1. Navigate to a product page and find the review section
    - expect: Review section with an 'Add your review' option is visible
  2. Click on 'Add your review' link
    - expect: Review submission form is displayed
    - expect: Form includes fields for rating, title, and review text
  3. Fill in the review form with valid data (e.g., 5-star rating, title 'Great product', and review text)
    - expect: All form fields are populated with the provided data
  4. Click the submit button
    - expect: Review is submitted successfully
    - expect: A confirmation message is displayed
    - expect: The review may appear on the product page after approval

#### 3.4. View 'Customers also bought' section

**File:** `tests/product-details/view-related-products.spec.ts`

**Steps:**
  1. Navigate to a product page like https://demowebshop.tricentis.com/25-virtual-gift-card
    - expect: The product details page loads
    - expect: A 'Customers who bought this item also bought' section is visible
  2. Scroll down to see the related products
    - expect: Related products are displayed with images, titles, prices, and 'Add to cart' buttons
    - expect: At least 2-3 related products are shown
  3. Click on a related product
    - expect: The product details page for that item loads
    - expect: Product information is correctly displayed

### 4. Shopping Cart Operations

**Seed:** `tests/seed.spec.ts`

#### 4.1. Add single product to cart

**File:** `tests/shopping-cart/add-single-product.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: Featured products are displayed
    - expect: Shopping cart shows 0 items: 'Shopping cart (0)'
  2. Click 'Add to cart' button on any featured product
    - expect: The product is added to the cart
    - expect: The shopping cart count is updated to 1: 'Shopping cart (1)'
    - expect: A confirmation message may appear
  3. Navigate to https://demowebshop.tricentis.com/cart
    - expect: The shopping cart page loads
    - expect: The added product is listed in the cart
    - expect: Product details (name, price, quantity) are correctly displayed

#### 4.2. Add multiple products to cart

**File:** `tests/shopping-cart/add-multiple-products.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
  2. Click 'Add to cart' on the first featured product
    - expect: The cart count updates to 1
  3. Click 'Add to cart' on a second featured product
    - expect: The cart count updates to 2
  4. Navigate to the shopping cart
    - expect: Both products are listed in the cart
    - expect: Cart total is calculated correctly
    - expect: Each product shows correct name, price, and quantity

#### 4.3. Increase product quantity in cart

**File:** `tests/shopping-cart/increase-quantity.spec.ts`

**Steps:**
  1. Add a product to cart and navigate to https://demowebshop.tricentis.com/cart
    - expect: The shopping cart page loads
    - expect: The product is displayed with quantity selector
  2. Find the quantity field for the product and change it from 1 to 3
    - expect: The quantity field is updated to 3
  3. Click update or similar button to apply the change
    - expect: The quantity is updated in the cart
    - expect: The line item total is recalculated
    - expect: The cart total is updated

#### 4.4. Remove product from cart

**File:** `tests/shopping-cart/remove-product.spec.ts`

**Steps:**
  1. Add multiple products to cart and navigate to the cart page
    - expect: The shopping cart page loads
    - expect: Multiple products are displayed in the cart
  2. Find the remove button or checkbox for one product and remove it
    - expect: The product is removed from the cart
    - expect: Cart total is updated
    - expect: Cart count is decreased

#### 4.5. Continue shopping from cart page

**File:** `tests/shopping-cart/continue-shopping.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/cart with items in cart
    - expect: The shopping cart page loads
    - expect: Products are displayed in the cart
  2. Look for and click a 'Continue shopping' button or link
    - expect: The user is redirected to the product browsing page
    - expect: Cart items are retained

#### 4.6. Apply coupon code

**File:** `tests/shopping-cart/apply-coupon.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/cart with items in cart
    - expect: The shopping cart page loads
    - expect: A coupon code field or button is visible
  2. Enter a valid coupon code (if available) or an invalid code
    - expect: The code is entered in the coupon field
  3. Click the apply coupon button
    - expect: If valid: The discount is applied and the total is updated
    - expect: If invalid: An error message is shown indicating the code is not valid

### 5. Wishlist and Product Comparison

**Seed:** `tests/seed.spec.ts`

#### 5.1. Add product to wishlist

**File:** `tests/wishlist/add-to-wishlist.spec.ts`

**Steps:**
  1. Navigate to a product page, e.g., https://demowebshop.tricentis.com/25-virtual-gift-card
    - expect: The product page loads
    - expect: 'Add to wishlist' button is visible
    - expect: Wishlist counter in header shows 'Wishlist (0)'
  2. Click the 'Add to wishlist' button
    - expect: The product is added to the wishlist
    - expect: The wishlist counter is updated to 'Wishlist (1)'
    - expect: A confirmation message may appear
  3. Navigate to https://demowebshop.tricentis.com/wishlist
    - expect: The wishlist page loads
    - expect: The added product is displayed in the wishlist
    - expect: Product details are shown

#### 5.2. Add multiple products to compare

**File:** `tests/wishlist/add-to-compare.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
  2. Find and click 'Add to compare list' on the first product
    - expect: The product is added to the comparison list
  3. Find and click 'Add to compare list' on a second product
    - expect: The second product is added to the comparison list
  4. Navigate to https://demowebshop.tricentis.com/compareproducts
    - expect: The comparison page loads
    - expect: Both products are displayed side-by-side
    - expect: Key attributes are compared

#### 5.3. Remove product from compare list

**File:** `tests/wishlist/remove-from-compare.spec.ts`

**Steps:**
  1. Add products to comparison list and navigate to the comparison page
    - expect: The comparison page loads
    - expect: Multiple products are displayed
  2. Find and click the remove button for one product
    - expect: The product is removed from the comparison
    - expect: The comparison list is updated

### 6. Checkout and Payment

**Seed:** `tests/seed.spec.ts`

#### 6.1. Proceed to checkout

**File:** `tests/checkout/proceed-to-checkout.spec.ts`

**Steps:**
  1. Add products to cart and navigate to https://demowebshop.tricentis.com/cart
    - expect: The shopping cart page loads
    - expect: Cart contents are displayed with items and total
  2. Look for and click a 'Checkout' button
    - expect: The checkout process begins
    - expect: Either a checkout page or modal appears with next steps

#### 6.2. Checkout as guest user

**File:** `tests/checkout/checkout-as-guest.spec.ts`

**Steps:**
  1. Proceed to checkout from the cart with items in cart
    - expect: Checkout page or options are displayed
    - expect: An option to 'Checkout as Guest' is available
  2. Select 'Checkout as Guest' option
    - expect: Guest checkout flow is initiated
    - expect: Shipping address form is displayed
  3. Fill in shipping details (Address, City, State, ZIP, Country)
    - expect: All fields are populated
    - expect: Required fields are indicated
  4. Click next or continue button
    - expect: Shipping method selection is shown
    - expect: Available shipping options are displayed

#### 6.3. Checkout as logged-in user

**File:** `tests/checkout/checkout-logged-in.spec.ts`

**Steps:**
  1. Log in to an existing account and add products to cart
    - expect: User is logged in
    - expect: Cart has items
  2. Navigate to cart and proceed to checkout
    - expect: Checkout page loads
    - expect: User's saved addresses may be pre-populated
  3. Review and confirm shipping address
    - expect: Address is correct or user can edit it
    - expect: Confirmation button is available
  4. Select shipping method
    - expect: Available shipping options are shown
    - expect: Shipping cost is calculated and added to total

#### 6.4. Select payment method

**File:** `tests/checkout/select-payment-method.spec.ts`

**Steps:**
  1. Proceed through checkout to the payment method step
    - expect: Payment method selection is displayed
    - expect: Available payment options are shown (e.g., Credit Card, PayPal, etc.)
  2. Select a payment method
    - expect: The payment method is selected
    - expect: Relevant payment form fields appear

#### 6.5. Review order before completion

**File:** `tests/checkout/review-order.spec.ts`

**Steps:**
  1. Proceed through all checkout steps
    - expect: An order review page is displayed
    - expect: Order summary shows all items, quantities, and prices
    - expect: Shipping address is shown
    - expect: Shipping method and cost are displayed
    - expect: Payment method is shown
    - expect: Order total is calculated
  2. Verify all order details are correct
    - expect: Items are correct
    - expect: Quantities are correct
    - expect: Prices are accurate
    - expect: Shipping information is correct
  3. Click 'Place Order' or 'Complete Purchase' button
    - expect: Order is submitted
    - expect: A success message is displayed
    - expect: Order number is provided

### 7. Newsletter and Community Features

**Seed:** `tests/seed.spec.ts`

#### 7.1. Subscribe to newsletter

**File:** `tests/newsletter/subscribe-newsletter.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: Newsletter subscription section is visible in the sidebar
  2. Find the newsletter email input field
    - expect: A textbox for email entry is visible
  3. Enter a valid email address (e.g., user@example.com)
    - expect: The email is entered in the field
  4. Click the 'Subscribe' button
    - expect: Subscription is processed
    - expect: A confirmation message is displayed indicating successful subscription
    - expect: The email is added to the newsletter list

#### 7.2. Subscribe with invalid email

**File:** `tests/newsletter/subscribe-invalid-email.spec.ts`

**Steps:**
  1. Navigate to the homepage and find the newsletter section
    - expect: Newsletter section is visible
  2. Enter an invalid email (e.g., 'not-an-email')
    - expect: Invalid email text is entered
  3. Click the 'Subscribe' button
    - expect: An error message is displayed
    - expect: Subscription is not completed
    - expect: The user is prompted to enter a valid email

#### 7.3. Vote in community poll

**File:** `tests/newsletter/community-poll.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: Community poll section is visible asking 'Do you like nopCommerce?'
  2. Select one of the poll options (e.g., 'Excellent')
    - expect: The radio button for the selected option is checked
  3. Click the 'Vote' button
    - expect: Vote is submitted
    - expect: Poll results may be displayed
    - expect: A confirmation message appears

### 8. Navigation and Site Features

**Seed:** `tests/seed.spec.ts`

#### 8.1. Navigate using main menu

**File:** `tests/navigation/main-menu-navigation.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: Main category navigation is visible with links: Books, Computers, Electronics, Apparel & Shoes, Digital downloads, Jewelry, Gift Cards
  2. Click on 'Electronics' category
    - expect: The Electronics category page loads
    - expect: Products in the Electronics category are displayed
  3. Verify page title changes to reflect the category
    - expect: Page title shows 'Demo Web Shop. Electronics' or similar

#### 8.2. Navigate using sidebar categories

**File:** `tests/navigation/sidebar-navigation.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: Sidebar with 'Categories' section is visible
  2. Click on a category from the sidebar, e.g., 'Jewelry'
    - expect: The Jewelry category page loads
    - expect: Products in that category are displayed

#### 8.3. Navigate to footer links

**File:** `tests/navigation/footer-links.spec.ts`

**Steps:**
  1. Navigate to https://demowebshop.tricentis.com/
    - expect: The homepage loads
    - expect: Footer is visible with multiple sections: Information, Customer service, My account
  2. Click on 'Shipping & Returns' link in the Information section
    - expect: The Shipping & Returns page loads
    - expect: Page displays shipping and return policy information
  3. Navigate back and click on 'Privacy Notice' link
    - expect: The Privacy Notice page loads
    - expect: Privacy policy content is displayed
  4. Navigate back and click on 'Contact us' link
    - expect: The Contact us page loads
    - expect: Contact form or contact information is displayed

#### 8.4. View product tags

**File:** `tests/navigation/product-tags.spec.ts`

**Steps:**
  1. Navigate to a product page like https://demowebshop.tricentis.com/25-virtual-gift-card
    - expect: The product page loads
    - expect: 'Product tags' section is visible showing tags like 'nice', 'gift'
  2. Click on a product tag (e.g., 'nice')
    - expect: Products with that tag are displayed
    - expect: Page shows all products tagged with that keyword

#### 8.5. Access My Account section

**File:** `tests/navigation/my-account.spec.ts`

**Steps:**
  1. Log in to the application with valid credentials
    - expect: User is logged in
  2. Look for 'My Account' link in the footer or header
    - expect: My Account link is visible
  3. Click on 'My Account' link
    - expect: My Account page or dashboard loads
    - expect: Options like View Profile, Orders, Addresses are shown
  4. Click on 'Orders' link
    - expect: Orders page loads
    - expect: List of user's orders is displayed with order numbers, dates, and statuses

### 9. Edge Cases and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 9.1. Handle page not found (404)

**File:** `tests/edge-cases/page-not-found.spec.ts`

**Steps:**
  1. Navigate to a non-existent page like https://demowebshop.tricentis.com/this-page-does-not-exist
    - expect: A 404 error page is displayed
    - expect: Error message indicates the page was not found
    - expect: Links to navigate back or go to homepage are provided

#### 9.2. Test browser back/forward navigation

**File:** `tests/edge-cases/browser-navigation.spec.ts`

**Steps:**
  1. Navigate to homepage → Books category → A specific book product
    - expect: Each page loads correctly
    - expect: Navigation flow is logical
  2. Click browser back button
    - expect: User returns to Books category page
    - expect: Page state is preserved
  3. Click browser back button again
    - expect: User returns to homepage
    - expect: Homepage loads correctly
  4. Click browser forward button
    - expect: User navigates to Books category
    - expect: Page loads correctly

#### 9.3. Test special characters in search

**File:** `tests/edge-cases/search-special-characters.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Homepage loads
  2. Search for special characters like '!@#$%'
    - expect: Search handles special characters gracefully
    - expect: Either no results or error handling is appropriate
    - expect: Application doesn't crash or break

#### 9.4. Test very long input in text fields

**File:** `tests/edge-cases/long-input.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: Registration form is displayed
  2. Enter a very long string (500+ characters) in the First name field
    - expect: Field either accepts the input with character limit or displays validation message
    - expect: Application handles long input without crashing

#### 9.5. Test duplicate account registration

**File:** `tests/edge-cases/duplicate-registration.spec.ts`

**Steps:**
  1. Register a new account with email 'test.user@example.com' and complete registration
    - expect: Account is created successfully
  2. Navigate to registration page again
    - expect: Registration form is displayed
  3. Attempt to register with the same email address 'test.user@example.com'
    - expect: An error message is displayed indicating email already exists
    - expect: Registration is prevented
    - expect: User is prompted to use different email or login with existing account
