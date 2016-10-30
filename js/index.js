class MultiSelect{
    constructor(id){
        let replacement = document.querySelector(`#${id}`);
        if(replacement.tagName != 'SELECT') return;

        let dropDown = document.createElement('div');
        dropDown.id = 'dropdown';

        dropDown.innerHTML = `
            <input type="text">
            <div class="options">
                ${this.getList(replacement.querySelectorAll('option'))}
            </div>
        `;

        this.options = dropDown.querySelector('.options');

        replacement.parentNode.replaceChild(dropDown, replacement);
    }

    getList(options){
        let dd_options = '<fieldset></fieldset>';
        for(let option of options){
            dd_options += this.getOption(option);
        }
        return dd_options;
    }

    getOption(option){
        return `
            <fieldset>
                <label data-value="${option.value}">
                    <input type="checkbox" required>
                </label>
            </fieldset>
        `;
    }
}