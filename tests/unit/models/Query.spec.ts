import { describe, expect, it } from "vitest";

import { QuerySchema } from "../../../src/models";

describe("parseQuery", () => {
  it("parses queries", () => {
    const testQuery = {
      path: [
        {
          iri: "http://endhealth.info/im#statedGender",
          name: "gender as stated",
          optional: true,
          typeOf: {
            iri: "http://endhealth.info/im#Codeable",
            name: "Codeable"
          },
          node: "stagen_0"
        }
      ],
      return: [
        {
          iri: "http://endhealth.info/im#code",
          name: "code",
          as: "new_column_-1",
          nodeRef: "stagen_0"
        }
      ],
      draft: true,
      uuid: "46b4bcd4-9104-41cd-a6ac-e57f11bbc827"
    };
    expect(QuerySchema.safeParse({}).success).toBe(true);
    expect(QuerySchema.safeParse(testQuery).success).toBe(true);
  });
});
