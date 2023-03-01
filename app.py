from flask import Flask, render_template
import baseDatos

app = Flask(__name__, static_url_path='', static_folder='frontend/static/', template_folder='frontend/templates')

from routes.rutas import * #Debe ir después de declarar app, ya que app es usado en este módulo que se está importando

if __name__ == '__main__':
    app.run(debug=True, port=3000)
