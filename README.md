**CRUD App:**

This is a simple CRUD (Create, Read, Update, Delete) application built using React. It allows users to manage a list of user profiles with details such as name, email, role, and address. Below is an explanation of the main components and functionalities of the app.
Components and Functionalities

    State Variables
        open: Boolean state to manage the visibility of the modal.
        user: Object representing the current user being added or edited.
        userdata: Array of user objects, representing the list of users.
        action: String to distinguish between 'Add' and 'Edit' actions.
        editIndex: Index of the user being edited.

    User Object
        A template user object blankUser is defined with empty string properties for name, email, role, and address.

    Modal Functions
        onOpenModal: Opens the modal by setting open to true.
        onCloseModal: Closes the modal by setting open to false and resets the action to 'Add'.

    User Management Functions
        addUser: Adds a new user to the userdata array and resets the user state.
        editUser: Opens the modal for editing, sets the user state to the selected user, and sets the editIndex.
        updateUser: Updates the user data at the editIndex in the userdata array.
        deleteUser: Removes the user from the userdata array at the specified index.

    Rendering Components
        Header and Toolbar: Contains the title of the app and an "Add" button to open the modal.
        Table: Displays the list of users with columns for name, email, role, address, and action buttons (Edit and Delete).
        Modal: A form within the modal to input user details and either add a new user or update an existing user.

        
