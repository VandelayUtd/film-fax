class Movie < ApplicationRecord
    validates_uniqueness_of :plot
end
