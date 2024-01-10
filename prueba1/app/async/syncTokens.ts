// const designTokens: { [key: string]: any } = {
//     'colors': {
//         'blue': '#1fb6ff',
//         'purple': '#7e5bef',
//         'pink': '#ff49db',
//         'orange': '#ff7849',
//         'green': '#13ce66',
//         'yellow': '#ffc82c',
//         'gray': {
//             '100': '#f7fafc',
//             '900': '#1a202c',
//         },
//     },
//     'fontFamily': {
//         'heading': ['Roboto', 'sans-serif'],
//         'body': ['Open Sans', 'sans-serif'],
//     },
//     'borderRadius': {
//         'none': '0',
//         'sm': '.125rem',
//         'DEFAULT': '.25rem',
//         'lg': '.5rem',
//         'full': '9999px',
//     }
// };


fetch('https://aquicreamos.com/tockens.json')
    .then(response => {
        // Verifica si la solicitud fue exitosa (código de respuesta 200)
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        // Parsea el cuerpo de la respuesta como JSON
        return response.json();
    })
    .then(data => {
        const designTokens = data[0];
        const generateTypeScriptCode = () => {
            let code = 'export const designTokens = {\n';

            for (const category in designTokens) {
                code += `  ${category}: {\n`;

                for (const token in designTokens[category]) {
                    const value = JSON.stringify(designTokens[category][token]);
                    code += `    ${token}: ${value},\n`;
                }

                code += '  },\n';
            }

            code += '};\n';

            return code;
        };

        console.log(generateTypeScriptCode());
    })
    .catch(error => {
        console.log('export const designTokens = { error: "Error al obtener el archivo JSON", colors: {}, fontFamily:{}, borderRadius:{} }');
    });



