class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.float :abv
      t.string :rate_beer_url
      t.float :rate_beer_score
      t.integer :brewery_id

      t.timestamps null: false
    end
  end
end
