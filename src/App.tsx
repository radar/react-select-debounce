import Select from "react-select/async";
import { useDebouncedCallback } from "use-debounce";

type Prediction = {
  description: string;
  matched_substrings: any;
  place_id: string;
  reference: string;
  structured_formatting: any;
  terms: any;
  types: any;
};

type AutocompleteResults = {
  predictions: Array<Prediction>;
  status: "OK" | "ZERO_RESULTS";
};

const data: AutocompleteResults = {
  predictions: [
    {
      description: "Smithfield NSW, Australia",
      matched_substrings: [
        {
          length: 10,
          offset: 0,
        },
      ],
      place_id: "ChIJzx-d3sSXEmsRIMsyFmh9AQU",
      reference: "ChIJzx-d3sSXEmsRIMsyFmh9AQU",
      structured_formatting: {
        main_text: "Smithfield",
        main_text_matched_substrings: [
          {
            length: 10,
            offset: 0,
          },
        ],
        secondary_text: "NSW, Australia",
      },
      terms: [
        {
          offset: 0,
          value: "Smithfield",
        },
        {
          offset: 11,
          value: "NSW",
        },
        {
          offset: 16,
          value: "Australia",
        },
      ],
      types: ["locality", "political", "geocode"],
    },
    {
      description: "Smithfield QLD, Australia",
      matched_substrings: [
        {
          length: 10,
          offset: 0,
        },
      ],
      place_id: "ChIJhbpA9sdveGkRYAghf_HuAAU",
      reference: "ChIJhbpA9sdveGkRYAghf_HuAAU",
      structured_formatting: {
        main_text: "Smithfield",
        main_text_matched_substrings: [
          {
            length: 10,
            offset: 0,
          },
        ],
        secondary_text: "QLD, Australia",
      },
      terms: [
        {
          offset: 0,
          value: "Smithfield",
        },
        {
          offset: 11,
          value: "QLD",
        },
        {
          offset: 16,
          value: "Australia",
        },
      ],
      types: ["locality", "political", "geocode"],
    },
    {
      description: "Smithfield SA, Australia",
      matched_substrings: [
        {
          length: 10,
          offset: 0,
        },
      ],
      place_id: "ChIJb689q_GssGoRMMGOYlQ2AwU",
      reference: "ChIJb689q_GssGoRMMGOYlQ2AwU",
      structured_formatting: {
        main_text: "Smithfield",
        main_text_matched_substrings: [
          {
            length: 10,
            offset: 0,
          },
        ],
        secondary_text: "SA, Australia",
      },
      terms: [
        {
          offset: 0,
          value: "Smithfield",
        },
        {
          offset: 11,
          value: "SA",
        },
        {
          offset: 15,
          value: "Australia",
        },
      ],
      types: ["locality", "political", "geocode"],
    },
  ],
  status: "OK",
};

function App() {
  const _loadOptions = (
    input: string,
    callback: (results: Array<{ value: string; label: string }>) => void
  ) => {
    const locations = data.predictions.map((prediction) => {
      return { value: prediction.place_id, label: prediction.description };
    });

    callback(locations);
  };

  const loadOptions = useDebouncedCallback(_loadOptions, 250);

  return (
    <div>
      <Select loadOptions={loadOptions} />
    </div>
  );
}

export default App;
