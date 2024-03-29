import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  NextIcon,
  NodeJsIcon,
  NestIcon,
  TsIcon,
  TailwindIcon,
} from "@/assets/icons";

const skillsIcons = [
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  NextIcon,
  NodeJsIcon,
  NestIcon,
];

export function Skills() {
  return (
    <div id="skills">
      <h3 className="mb-[0.5em] text-2xl sm:text-4xl font-bold">Skills :</h3>
      <ul className="flex items-center flex-wrap gap-8">
        {skillsIcons.map((Icon, index) => (
          <li className="w-12 h-12" key={index}>
            <Icon />
          </li>
        ))}
      </ul>
    </div>
  );
}
