class SearchDetails

    @@all = []

    def initialize(search_array)
        @search_array = search_array
        @@all << @search_array
    end

    def self.all
        @@all
    end

    def self.get_details
        if self.all.length > 0
            
            self.all.last.map do |movie|
                MovieCreator.new(movie)
            end
        end
    end

end