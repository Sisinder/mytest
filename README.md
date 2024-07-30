# Running the application

For Backend: 
mvn clean package
mvn spring-boot:run

For Frontend: 
1) npm install
2) ng serve


Steps to validate Wishlist consistency after network failures (backend):
1) Add items to wishlist
2) Close the backend server
3) Validate changes on frontend (the wishlist would also be visible even on reload):
4) Start the backend server to confirm if the application is working as expected


