import Accordion from "../components/Accordion/Accordion.vue";
import AccordionItem from "../components/Accordion/AccordionItem.vue";

 
 export default {
    title: 'Example/Accordion',
    component: AccordionItem,
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    argTypes: {
      header: {
        control: "text"
      },
      active: {
        control: 'boolean',
      },
      id: {
        control: 'text',
      },
    },
    args: {
      header: "AccordionItem",
      active: true,
      id: "default",
    },
  };

  // export const Danger = {
  //   args: {
     
  //   },
  // };

  export const SingleSlot = {
    args: {
      header: "Hellow",
      text: "Hellooooooo",
      active: true,
      id: "#default",
    },
    render: (args) => ({
      components: { Accordion, AccordionItem},
      setup() {
        return { args };
      },
      template: `
       <Accordion v-model="modelAccordion">
          <AccordionItem header="args.header" id="args.id" v-bind="args">
            {{args.text}}
          </AccordionItem>
        </Accordion>
      `,
    }),
}

  export const Group = {
      render: (args) => ({
        components: { Accordion, AccordionItem},
        setup() {
          return { args };
        },
        template: `
          <Accordion v-model="modelAccordion">
                <AccordionItem header="Test header accordion" active>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </AccordionItem>
                <AccordionItem header="Test header accordion 2" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </AccordionItem>
                <AccordionItem header="Test header accordion 3" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </AccordionItem>
          </Accordion>
        `,
      }),
  }