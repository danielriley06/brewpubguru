class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :postal_code
      t.string :country
      t.string :telephone
      t.string :brewery_url
      t.string :brewery_type
      t.string :hours
      t.integer :review_id

      t.timestamps null: false
    end
  end
end
