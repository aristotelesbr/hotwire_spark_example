class CheckoutsController < ApplicationController
  def new
    @checkout = Checkout.new
  end

  def create
    @checkout = Checkout.new(checkout_params)
    if @checkout.save
      flash[:notice] = "Pagamento processado com sucesso!"
      redirect_to checkout_path(@checkout)
    else
      render :new
    end
  end

  def show
    @checkout = Checkout.find(params[:id])
  end

  private

  def checkout_params
    params.require(:checkout).permit(:card_number, :card_name, :expiry_date, :cvv, :status)
  end
end
