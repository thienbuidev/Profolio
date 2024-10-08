interface RichText {
  type: "text";
  text: {
    content: string;
    link?: { url: string } | null;
  };
  plain_text: string;
}

interface ParagraphBlock {
  type: "paragraph";
  id: string;
  paragraph: {
    rich_text: RichText[];
  };
}

interface Heading1Block {
  type: "heading_1";
  id: string;
  heading_1: {
    rich_text: RichText[];
  };
}

interface Heading2Block {
  type: "heading_2";
  id: string;
  heading_2: {
    rich_text: RichText[];
  };
}

interface Heading3Block {
  type: "heading_3";
  id: string;
  heading_3: {
    rich_text: RichText[];
  };
}

interface BulletedListItemBlock {
  type: "bulleted_list_item";
  id: string;
  bulleted_list_item: {
    rich_text: RichText[];
  };
}

interface NumberedListItemBlock {
  type: "numbered_list_item";
  id: string;
  numbered_list_item: {
    rich_text: RichText[];
  };
}

interface ToDoBlock {
  type: "to_do";
  id: string;
  to_do: {
    rich_text: RichText[];
    checked: boolean;
  };
}

interface ImageBlock {
  type: "image";
  id: string;
  image: {
    type: "external" | "file";
    external?: {
      url: string;
    };
    file?: {
      url: string;
    };
  };
}

type Block =
  | ParagraphBlock
  | Heading1Block
  | Heading2Block
  | Heading3Block
  | BulletedListItemBlock
  | NumberedListItemBlock
  | ToDoBlock
  | ImageBlock;

export const renderBlock = (block: Block) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={block.id}>
          {block.paragraph.rich_text.map((text) => text.plain_text).join(" ")}
        </p>
      );

    case "heading_1":
      return (
        <h1 key={block.id} className="font-bold text-2xl">
          {block.heading_1.rich_text.map((text) => text.plain_text).join(" ")}
        </h1>
      );

    case "heading_2":
      return (
        <h2 key={block.id} className="font-semibold text-xl">
          {block.heading_2.rich_text.map((text) => text.plain_text).join(" ")}
        </h2>
      );

    case "heading_3":
      return (
        <h3 key={block.id}>
          {block.heading_3.rich_text.map((text) => text.plain_text).join(" ")}
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li key={block.id}>
          {block.bulleted_list_item.rich_text
            .map((text) => text.plain_text)
            .join(" ")}
        </li>
      );

    case "numbered_list_item":
      return (
        <li key={block.id}>
          {block.numbered_list_item.rich_text
            .map((text) => text.plain_text)
            .join(" ")}
        </li>
      );

    case "to_do":
      return (
        <div key={block.id}>
          <input type="checkbox" checked={block.to_do.checked} readOnly />
          {block.to_do.rich_text.map((text) => text.plain_text).join(" ")}
        </div>
      );

    case "image":
      return (
        <img
          key={block.id}
          src={
            block.image.type === "external"
              ? block.image.external!.url
              : block.image.file!.url
          }
          alt="Notion content image"
        />
      );

    default:
      return null;
  }
};
