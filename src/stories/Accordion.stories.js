import Accordion from "../components/Accordion/Accordion.vue";
import AccordionItem from "../components/Accordion/AccordionItem.vue";

 
 export default {
    title: 'Example/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  };



  export const Basic = {
      render: (args) => ({
        components: { Accordion, AccordionItem},
        setup() {
          return { args };
        },
        template: `
          <Accordion v-model="modelAccordion">
                <AccordionItem header="Test header accordion" >
                  Pegadaian Design
                </AccordionItem>
                <AccordionItem header="Test header accordion 2" active>
                  Pegadaian Design
                </AccordionItem>
          </Accordion>
        `,
      }),
  }