# Module 13 - E-commerce Back End

## Description

- A database that is changeable to the user's need, allowing them to update categories, products, and product tags.

## Installation

- To use the program correctly, be sure to create the database by doing SOURCE db/schema.sql to get into the directory with the schema file,
- Seed the database using the "node seeds/index.js" command in the terminal,
- Run the "npm i" command to download all of the node modules used,
- And finally, use "npm run start" to start the server to connect to insomnia!

## Usage

- After seeding the database and once the server is running, use the GET method using "localhost:3001/api/categories" to retrieve all of the information,

![image](https://user-images.githubusercontent.com/117489964/228609041-4e0de57f-2140-47dd-910e-b4fed503ae9c.png)

- Then, use the POST method to add a new category using JSON. Be sure to use the format shown in the screenshot below: 

![image](https://user-images.githubusercontent.com/117489964/228609876-958712a0-542f-4efb-b3d3-c490e5fe942b.png)

- To update the category, use the PUT method using "localhost:3001/api/categories/:id" to update it. Use the same format as when a category was created,

![image](https://user-images.githubusercontent.com/117489964/228610615-117ade32-4141-4ec6-a79d-53fc8d478954.png)

- To delete the category, use the DELETE method using the same link as above. 

![image](https://user-images.githubusercontent.com/117489964/228610736-7d57fe9e-937f-45e3-99e2-2d5ef65cf6f9.png)

- Repeat these same steps for the Products and Tags!

## Credits

- Collaborators: George Jordan (Judgedgeo) https://github.com/Judgedgeo
- Along with stackoverflow, W3Schools, and various other tutorials

## License

MIT License

Copyright (c) [2023] [George Jordan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
