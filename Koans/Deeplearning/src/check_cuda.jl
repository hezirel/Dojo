
using Suppressor

function check_cuda()
  try
    include("../src/load_cuda.jl")
    return true
  catch e
      # no Cuda is installed
      return false
  end
end


function print_system_gpu_status()
  status = @suppress_err check_cuda()
  if status == 1
    print("GPU Detected with CUDA support")
  else
    print("CUDA library not detected. If you have a GPU please install CUDA.")
  end
end
