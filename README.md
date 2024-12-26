# README
[Live Reload com Hotwire Spark no Ruby on Rails](https://youtu.be/Rd12-UPJtbM)

![YouTube Thumbnail Blue](https://github.com/user-attachments/assets/ac48c8bb-abb8-4441-8171-6952e365c8f1)

- Init project
    `rails new example -c tailwindcss`

- Generate model and controller
   ```sh
    rails generate controller Checkouts new create
    rails generate model Checkout card_number:string card_name:string expiry_date:string cvv:string status:string
  ```

## Show Case
  ![Screenshot 2024-12-26 at 20 16 28](https://github.com/user-attachments/assets/c5f136c0-7525-48d3-a035-96fd44fd45d5)

- Update view
    `app/views/checkouts/new.html.erb`

- Update controller
    `app/controllers/checkouts_controller.rb`

- Run Server
    `bin/dev`

