class Movie < ApplicationRecord
    validates_uniqueness_of :api_id
end
