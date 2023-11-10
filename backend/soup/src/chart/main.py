import micropip
await micropip.install("cowsay")

import cowsay
cowsay.get_output_string('cow',"Hello from python!")

# await micropip.install("matplotlib")

# import matplotlib
# from matplotlib import pyplot as plt
# import numpy as np

# matplotlib.use('Agg')

# x = np.linspace(0, 2 * np.pi, 200)
# y = np.sin(x)
# fig, ax = plt.subplots()
# ax.plot(x, y)

# fig.canvas.draw()
# buff = fig.canvas.get_renderer().buffer_rgba()

# # For illustration
# import js
# js.window.buff = buff

# # data is typed array view on wasm memory
# # let data = window.buff.getBuffer('u8').data;
