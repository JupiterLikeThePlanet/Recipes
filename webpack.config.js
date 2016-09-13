module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Recipes: 'app/components/Recipes.jsx',
            RecipeMessage:'app/components/RecipeMessage.jsx',
            UniqueIngredient: 'app/components/UniqueIngredient.jsx',
            About: 'app/components/About.jsx',
            Instructions: 'app/components/Instructions.jsx',
            Dropdown: 'app/components/Dropdown.jsx',
            Checkbox: 'app/components/Checkbox.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
