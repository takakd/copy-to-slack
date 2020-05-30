import CursoredToSlack from "./cursoredtoslack";

const mock = {
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
        const c = new CursoredToSlack(mock)
        const options = {test: "hi", sub: {test: "hello"}};

        const done = await c.setOptions(options);
        expect(done).toBe(true)

        const got = await c.getOptions()
        expect(got).toMatchObject(options)
    });
});
