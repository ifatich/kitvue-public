import Accordion from "../components/Accordion/Accordion.vue";
import AccordionItem from "../components/Accordion/AccordionItem.vue";

 
 export default {
    title: 'Components/Accordion/Single',
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

  export const Single = {
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