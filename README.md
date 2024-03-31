# Mew App

## Introduction
Welcome to the Mew App repository! This application is designed for managing a simple shopping list. It features a clean, user-friendly interface and relies on Firebase for backend functionality.

## Configuration
Before using the Mew App, you need to configure Firebase. Follow these steps:

1. **Firebase Setup**: Ensure you have a Firebase account. Create a new Firebase project and set up a Firebase Realtime Database.

2. **Database URL**: Find your Firebase Realtime Database URL. It usually looks like `https://your-database-name.firebaseio.com`.

3. **Update Firebase Config**: Navigate to the `src/firebaseConfig.ts` file in this repository and replace the `DATABASE_URL` with your Firebase Database URL.

    ```typescript
    const firebaseConfig: FirebaseConfig = {
      databaseURL: "YOUR_DATABASE_URL",
    };
    ```

4. **Database Name**: In the `src/shoppingList.ts` file, update the reference to your Firebase Database name.

    ```typescript
    const shoppingListInDB = ref(database, "YOUR_DATABASE_NAME");
    ```

## Installation
To run the Mew App:

1. Clone the repository.

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm run dev
    ```

## Usage
With Mew App, you can add items to your shopping list, view a list of added items, and remove items by clicking on them.

Enjoy using Mew App for your shopping needs!

## License
This project is licensed under the terms of the [MIT LICENSE](LICENSE).
