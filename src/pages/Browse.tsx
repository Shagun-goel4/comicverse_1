import { useState, useMemo } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import Header from "@/components/Header";
import ComicCard from "@/components/ComicCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { comics } from "@/data/comics";

const Browse = () => {
  const [publisherFilter, setPublisherFilter] = useState<string>("all");
  const [genreFilter, setGenreFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("title");

  const publishers = ["all", ...Array.from(new Set(comics.map((c) => c.publisher)))];
  const genres = ["all", ...Array.from(new Set(comics.map((c) => c.genre)))];

  const filteredAndSortedComics = useMemo(() => {
    let result = [...comics];

    // Apply filters
    if (publisherFilter !== "all") {
      result = result.filter((comic) => comic.publisher === publisherFilter);
    }
    if (genreFilter !== "all") {
      result = result.filter((comic) => comic.genre === genreFilter);
    }

    // Apply sorting
    switch (sortBy) {
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "date":
        result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
    }

    return result;
  }, [publisherFilter, genreFilter, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
            Browse Comics
          </h1>
          <p className="text-muted-foreground">
            Showing {filteredAndSortedComics.length} of {comics.length} comics
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold">Filters:</span>
            </div>

            <Select value={publisherFilter} onValueChange={setPublisherFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Publisher" />
              </SelectTrigger>
              <SelectContent>
                {publishers.map((publisher) => (
                  <SelectItem key={publisher} value={publisher}>
                    {publisher === "all" ? "All Publishers" : publisher}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre === "all" ? "All Genres" : genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 ml-auto">
              <ArrowUpDown className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold">Sort:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low-High)</SelectItem>
                  <SelectItem value="price-high">Price (High-Low)</SelectItem>
                  <SelectItem value="date">Release Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(publisherFilter !== "all" || genreFilter !== "all") && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setPublisherFilter("all");
                  setGenreFilter("all");
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedComics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
