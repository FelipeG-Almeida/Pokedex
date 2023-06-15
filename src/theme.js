import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontSize: ["12px", "14px", "16px"]
      },
    },
  },
});

export default chakraTheme;
