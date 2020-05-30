import CursoredToSlack from "./cursoredtoslack";

const mockOptions = {
    storage: {
        sync: {
            values: {},
            get(key, f) {
                f(this.values)
            },
            set(keyValue, f) {
                this.values = keyValue
                f()
            }
        }
    }
}
describe('options', () => {
    test('get/set', async () => {
        const c = new CursoredToSlack(mockOptions)
        const options = {test: "hi", sub: {test: "hello"}};

        const done = await c.setOptions(options);
        expect(done).toBe(true)

        const got = await c.getOptions()
        expect(got).toMatchObject(options)
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
            }
        }
    }
};
describe('context menu', () => {
    test('create', () => {
        const c = new CursoredToSlack(mockContextMenu)
        c.addContextMenu()

        expect(mockContextMenu.contextMenus.params.type).toBe("normal");
        expect(mockContextMenu.contextMenus.params.title).toBe("Send to Slack");
        expect(mockContextMenu.contextMenus.params.contexts).toMatchObject(["all"]);
        expect(mockContextMenu.contextMenus.params.visible).toBe(true);
    });
    test.skip('onClicked', () => {
        const c = new CursoredToSlack(mockContextMenu)
        c.addContextMenu()
        // todo: check message
    });
});
