import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";
import { Button } from "./ui/button";

function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search startup"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;
