export default function MyForm() {
    function handleSubmit() {
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>
        <hr />
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
          <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
          <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
        </p>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    );
  }