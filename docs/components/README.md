# Components

## Example

### Props

| Prop name | Description          | Type   | Values | Default |
| --------- | -------------------- | ------ | ------ | ------- |
| name      | The name of the user | string | -      | 'Joe'   |

### Methods

#### triggerEvent

> Triggers an event

##### Params

| Param name | Type   | Description      |
| ---------- | ------ | ---------------- |
| e          | object | The event object |

### Events

| Event name    | Type   | Description         |
| ------------- | ------ | ------------------- |
| buttonClicked | string | ButtonClicked event |

### Slots

| Name | Description                            | Bindings |
| ---- | -------------------------------------- | -------- |
| name | Use this slot to insert custom content |          |

---

### Example

```vue live
<Example>lorem ipsum</Example>
```
