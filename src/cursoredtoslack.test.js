import CursoredToSlack from "./cursoredtoslack";
import CursoredToSlackOption from "./cursoredtoslack-option";

const mockOptions = {
  storage: {
    sync: {
      values: {},
      get(key, f) {
        f(this.values);
      },
      set(keyValue, f) {
        this.values = keyValue;
        f();
      },
    },
  },
};
describe("options", () => {
  test("get/set", async () => {
    const c = new CursoredToSlack(mockOptions);
    let done, options;

    options = { test: "hi", sub: { test: "hello" } };
    done = await c.setOptions(options).catch((error) => {
      return error;
    });
    expect(done).toBe("wrong instanceof");

    options = new CursoredToSlackOption();
    options.webhookUrl = "https://localhost";
    done = await c.setOptions(options).catch((error) => {
      return error;
    });
    expect(done).toBe(true);

    const got = await c.getOptions();
    expect(got.webhookUrl).toBe("https://localhost");
  });
});

// HACK: Does this test need?
const mockContextMenu = {
  contextMenus: {
    create(params) {
      this.params = params;
    },
    onClicked: {
      addListener(callback) {
        this.callback = callback;
      },
    },
  },
};
describe("context menu", () => {
  test("create", () => {
    const c = new CursoredToSlack(mockContextMenu);
    c.addContextMenu();

    expect(mockContextMenu.contextMenus.params.type).toBe("normal");
    expect(mockContextMenu.contextMenus.params.title).toBe("Send to Slack");
    expect(mockContextMenu.contextMenus.params.contexts).toMatchObject(["all"]);
    expect(mockContextMenu.contextMenus.params.visible).toBe(true);
  });
  test.skip("onClicked", () => {
    const c = new CursoredToSlack(mockContextMenu);
    c.addContextMenu();
    // todo: check message
  });
});
