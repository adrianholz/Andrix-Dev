import { services, tools } from "../../../../data/home-data";
import "./Filters.css";
import Filter from "../Filter/Filter";

export default function Filters({
  setTags,
}: {
  setTags: React.Dispatch<React.SetStateAction<Tags>>;
}) {
  const handleAddTag = (type: keyof Tags, tag: string) => {
    setTags((prevTags) => ({
      ...prevTags,
      [type]: [...prevTags[type], tag],
    }));
  };

  const handleRemoveTag = (type: keyof Tags, tag: string) => {
    setTags((prevTags) => {
      const currentTag = prevTags[type];
      if (Array.isArray(currentTag)) {
        return {
          ...prevTags,
          [type]: currentTag.filter((t) => t !== tag),
        };
      }
      return prevTags;
    });
  };

  return (
    <aside className="filters">
      <h2>Filters</h2>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search for Project..."
          onChange={(e) =>
            setTags((prevTags) => ({ ...prevTags, search: e.target.value }))
          }
        />
        <div className="category-filter">
          <Filter
            name="Major Project"
            onSelect={() => handleAddTag("scale", "Major Project")}
            onDeselect={() => handleRemoveTag("scale", "Major Project")}
          />
          <Filter
            name="Minor Project"
            onSelect={() => handleAddTag("scale", "Minor Project")}
            onDeselect={() => handleRemoveTag("scale", "Minor Project")}
          />
        </div>
        <div className="category-filter services-filter">
          {services.map((service, index) => (
            <Filter
              key={index}
              file={`${service.file}`}
              name={service.name}
              short={service.short}
              onSelect={() => handleAddTag("category", service.file)}
              onDeselect={() => handleRemoveTag("category", service.file)}
            />
          ))}
        </div>
        <div className="category-filter">
          {tools.map((tool, index) => (
            <Filter
              key={index}
              file={`${tool.name.toLowerCase().replaceAll(" ", "-")}`}
              name={tool.name}
              short={tool.name}
              onSelect={() => handleAddTag("technology", tool.name)}
              onDeselect={() => handleRemoveTag("technology", tool.name)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
