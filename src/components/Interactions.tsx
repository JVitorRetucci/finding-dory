import {
  DevicePhoneMobileIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { FC } from "react";

const phones = [
  {
    id: "helton",
    phone: "(16) 99278-6373",
    name: "Helton",
  },
  {
    id: "helton2",
    phone: "(16) 99440-0971",
    name: "Helton",
  },
  {
    id: "luciana",
    phone: "(16) 99328-4065",
    name: "Luciana",
  },
  {
    id: "joao",
    phone: "(16) 99300-0927",
    name: "João Vítor",
  },
  {
    id: "pedro",
    phone: "(16) 99413-1271",
    name: "Pedro Henrique",
  },
];

export const Interactions: FC = (): JSX.Element => {
  return (
    <div className="mt-3 flex flex-col items-center">
      <h2 className="text-center uppercase bg-amber-500/70 px-4 py-2 w-fit rounded-full">
        Viu ela? Fala pra gente!
      </h2>
      <ul className="w-full px-4 mt-4">
        {/* <li className="w-full">
          <a href="" className={"flex wf-'"}>
            {" "}
            <MapIcon className="max-w-5 max-h-5" />
            <span>Onde fui vista?</span>
          </a>
        </li> */}
        <li className="w-full">
          <Menu>
            {({ open }) => (
              <div className="relative z-0">
                <Menu.Button
                  className={
                    "flex w-full pr-5 justify-start items-center bg-amber-500 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100"
                  }
                >
                  <DevicePhoneMobileIcon className="max-w-5 max-h-5 mr-4" />
                  <span>Nosso contato</span>
                  <ChevronDownIcon
                    className={`max-w-5 max-h-5 transition-transform ml-auto ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="flex flex-col bg-amber-500/50 -translate-y-12 rounded-3xl p-4 pt-14">
                    {phones
                      .map((phone) => (
                        <Menu.Item key={phone.id}>
                          <div className="w-full hover:bg-amber-500 rounded-full py-1 px-2">
                            <a
                              href={`https://wa.me/55${phone.phone.replace(
                                /[\(\)\s\-]/g,
                                ""
                              )}`}
                              target="_blank"
                              className="leading-none w-full block p-2"
                            >
                              {phone.phone} - <strong>{phone.name}</strong>
                            </a>
                          </div>
                        </Menu.Item>
                      ))}
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        </li>
      </ul>
    </div>
  );
};
