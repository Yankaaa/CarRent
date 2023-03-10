import { RadioGroup } from "@headlessui/react";
import cn from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type TLanguageOption = {
  name: string;
  locale: string;
};

const languages: TLanguageOption[] = [
  { name: "EN", locale: "en" },
  { name: "UA", locale: "ua" },
];

const LanguageSelector = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(
    languages.find(({ locale }) => locale === router.locale)
  );

  useEffect(() => {
    router.push(router.asPath, router.asPath, {
      locale: selected?.locale,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        as="div"
        className="mr-3 flex md:mr-10"
      >
        {languages.map((lang) => (
          <RadioGroup.Option
            value={lang}
            key={`language-${lang.locale}-option`}
            className={cn(
              "overflow-hidden"
            )}
          >
            {({ checked }:any) => (
              <button
                className={cn(
                  "px-[2px] py-[2px] text-[10px] font-medium tracking-widest",
                  checked
                    ? "bg-yellow-500 text-white"
                    : "text-white"
                )}
              >
                {lang.name}
              </button>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
};

export default LanguageSelector;

