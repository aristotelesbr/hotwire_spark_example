class CreateCheckouts < ActiveRecord::Migration[8.0]
  def change
    create_table :checkouts do |t|
      t.string :card_number
      t.string :card_name
      t.string :expiry_date
      t.string :cvv
      t.string :status

      t.timestamps
    end
  end
end
